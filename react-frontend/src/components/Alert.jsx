import '../styles/App.css';

function Alert({ type, message, onClose }) {
  return (
    <div className={`alert alert-${type}`}>
      {message}
      {onClose && (
        <button 
          onClick={onClose}
          style={{ float: 'right', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ×
        </button>
      )}
    </div>
  );
}

export default Alert;