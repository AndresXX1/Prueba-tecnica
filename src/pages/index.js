import Navbar from '../components/Navbar/navbar';
import styles from './homePage.module.css';

function HomePage() {
    return (
        <div className={styles.container}>
            <Navbar />
            <h1 className={styles.userName}>Andres Sebastian Vera</h1>
            <header className={styles.header}>
                <img
                    src="/yo.png"
                    alt="Profile Picture"
                    className={styles.profileImage}
                />
                <h1 className={styles.userTitle}>Full stack developer</h1>
                <h3 className={styles.userTitles}>Full-Stack Developer | HTML5 | CSS3 | React | Next | Redux | Redux Toolkit | Tailwind | Bootstrap | Material UI | Node | Express | Sequelize | PostgreSQL | Javascript | Typescript</h3>
                <div className={styles.socialLinks}>
                    <a href="https://www.linkedin.com/in/andres-vera-676414281/" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" className={styles.socialIcon} />
                    </a>
                    <a href="https://github.com/AndresXX1" target="_blank" rel="noopener noreferrer">
                        <img src="/github.png" alt="GitHub" className={styles.socialIcon} />
                    </a>
                </div>
            </header>
        </div>
    );
}

export default HomePage;