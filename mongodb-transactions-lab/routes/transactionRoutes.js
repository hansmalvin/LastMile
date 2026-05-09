
const express = require('express');
const mongoose = require('mongoose');
const Account = require('../models/Account');

const router = express.Router();

router.post('/transfer', async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { fromAccountNumber, toAccountNumber, amount } = req.body;

        const fromAccount = await Account.findOne({ accountNumber: fromAccountNumber }).session(session);
        const toAccount = await Account.findOne({ accountNumber: toAccountNumber }).session(session);

        if (!fromAccount || !toAccount) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ message: 'Account not found' });
        }

        if (fromAccount.balance < amount) {
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({ message: 'Insufficient balance' });
        }

        fromAccount.balance -= amount;
        toAccount.balance += amount;

        await fromAccount.save({ session });
        await toAccount.save({ session });

        await session.commitTransaction();
        session.endSession();

        res.json({ message: 'Transfer completed successfully' });

    } catch (error) {
        await session.abortTransaction();
        session.endSession();

        console.error(error);
        res.status(500).json({ message: 'Transaction error', error: error.message });
    }
});

module.exports = router;
