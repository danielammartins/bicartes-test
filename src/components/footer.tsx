const year = new Date().getFullYear().toString()

const Footer: React.FC = () => {
  return (
    <footer id="contactos" className="h-26 bg-yellow-500 mt-36">
        <div className="h-full flex flex-row gap-8 justify-center items-center">
            <a href="https://www.facebook.com/profile.php?id=61573383578167&locale=pt_PT">
                facebook
            </a>
            <a href="https://www.instagram.com/bicartes.cultura/">
                instagram
            </a>
        </div>
        <p className="bg-yellow-500 mt-12 pb-4">© {year} Associação Cultural Bicartes</p>  
    </footer>
  );
}

export default Footer;