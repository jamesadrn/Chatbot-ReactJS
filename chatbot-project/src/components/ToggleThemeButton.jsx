import './ToggleThemeButton.css';

function ToggleThemeButton({ darkMode, onToggle }) {
  return (
    <button
      type="button"
      className="theme-button"
      aria-pressed={darkMode}
      onClick={onToggle}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ToggleThemeButton;
