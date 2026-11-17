export default function TreeArtwork() {
  return <svg className="tree-svg" viewBox="0 0 700 430" role="img" aria-label="Illustration of a memory tree">
    <rect width="700" height="430" rx="24" fill="#eef1e6" />
    <path d="M350 390 C340 310 365 250 350 150 M350 270 C290 220 250 200 210 165 M355 245 C405 205 445 160 490 125 M350 205 C320 165 300 125 290 92 M360 185 C390 145 405 112 410 80" fill="none" stroke="#805c3b" strokeWidth="18" strokeLinecap="round" />
    {[[210,155],[280,95],[410,82],[490,125],[350,145],[250,205],[450,200],[320,245],[395,250],[305,145],[455,145],[350,95]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="38" fill={['#9aba82','#b6cb92','#d1d99c','#87a976'][i%4]} opacity=".92" />)}
    <path d="M260 390h180" stroke="#805c3b" strokeWidth="14" strokeLinecap="round" />
  </svg>;
}
