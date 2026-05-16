function ErrorView({ message, onRetry }) {
  return (
    <div className="center">
      <div className="error-box">
        <p>{message}</p>
        <button onClick={onRetry}>Try Again</button>
      </div>
    </div>
  );
}

export default ErrorView;