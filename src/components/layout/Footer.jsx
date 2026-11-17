import siteConfig from '../../config/siteConfig.js';

export default function Footer() {
  return <footer className="footer">Made with care for our classmates · {siteConfig.batch}</footer>;
}
