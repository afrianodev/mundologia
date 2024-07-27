function Tooltip({ visible, content, position }) {
  if (!visible) return null;

  const style = {
    position: 'absolute',
    top: position.y,
    left: position.x,
    backgroundColor: 'white',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '3px',
    pointerEvents: 'none',
    zIndex: 1000,
  };

  return <div style={style}>{content}</div>;
}

export default Tooltip;