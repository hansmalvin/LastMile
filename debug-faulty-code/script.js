// STEP 2
console.log("=== Array Destructuring ===");

const inventory = ["Excalibur", "Iron Shield", "Health Potion", "Dungeon Map"];

const [weapon, offhand] = inventory;
console.log("Weapon:", weapon); 
console.log("Offhand:", offhand); 

const [slot1, , slot3] = inventory;
console.log("Slot 1:", slot1); 
console.log("Slot 3 (Consumable):", slot3); 


// STEP 3
console.log("=== Object Destructuring ===");

const player = {
  username: "ShadowNinja",
  level: 55,
  guild: "The Night Owls"
};

const { username, level } = player;
console.log("Username:", username);
console.log("Level:", level);


// STEP 4
console.log("=== Advanced Destructuring ===");

const gameQuest = {
  questId: 101,
  details: {
    title: "Defeat the Fire Dragon",
    rewards: {
      gold: 5000,
      xp: 1200
    }
  }
};

const {
  details: {
    title,
    rewards: { gold }
  }
} = gameQuest;

console.log("Quest Title:", title);
console.log("Gold Reward:", gold);

const { status = "In Progress" } = gameQuest;
console.log("Quest Status:", status);

const { username: alias = "Guest" } = player;
console.log("Player Alias:", alias);


// STEP 5
console.log("=== Function Destructuring ===");

function announcePlayer({ username, guild }) {
  console.log(`Attention! ${username} from ${guild} has entered the town!`);
}

announcePlayer(player);

function spawnCharacter([x, y, z]) {
  console.log(`Character spawned at coordinates -> X: ${x}, Y: ${y}, Z: ${z}`);
}

spawnCharacter([150, 45, 12]);