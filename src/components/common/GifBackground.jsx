export default function GifBackground({ children, image }) {
  return <div className="gif-background" style={image ? { backgroundImage: `url(${image})` } : undefined}>{children}</div>;
}
