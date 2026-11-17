import { useState } from 'react';

export default function useTreeCamera() {
  const [zoom, setZoom] = useState(1);
  const reset = () => setZoom(1);
  return { zoom, setZoom, reset };
}
