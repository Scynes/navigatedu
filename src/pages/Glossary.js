import { useState } from "react";
import PageTransition from "../components/PageTransition";

const GLOSSARY = [
    {
        word: 'Browser',
        definition: 'Browser',
        image: require('../assets/images/glossary/browser-bg.svg').default
    },
    {
        word: 'URL',
        definition: 'Test',
        image: require('../assets/images/glossary/url-bg.svg').default
    },
    {
        word: 'Hyperlink',
        definition: 'Test',
        image: require('../assets/images/glossary/hyperlink-bg.svg').default
    },
    {
        word: 'Search Engine',
        definition: 'Test',
        image: require('../assets/images/glossary/search-engine-bg.svg').default
    },
    {
        word: 'Software',
        definition: 'Test',
        image: require('../assets/images/glossary/software-bg.svg').default
    },
    {
        word: 'Program',
        definition: 'Test',
        image: require('../assets/images/glossary/program-bg.svg').default
    },
    {
        word: 'Website',
        definition: 'Test',
        image: require('../assets/images/glossary/website-bg.svg').default
    },
    {
        word: 'Tabs',
        definition: 'Test',
        image: require('../assets/images/glossary/tabs-bg.svg').default
    },
    {
        word: 'Bookmarks',
        definition: 'Test',
        image: require('../assets/images/glossary/bookmarks-bg.svg').default
    },
    {
        word: 'Back Button',
        definition: 'Test',
        image: require('../assets/images/glossary/back-button-bg.svg').default
    },
    {
        word: 'Forward Button',
        definition: 'Test',
        image: require('../assets/images/glossary/forward-button-bg.svg').default
    },
    {
        word: 'Refresh',
        definition: 'Test',
        image: require('../assets/images/glossary/refresh-bg.svg').default
    },
    {
        word: 'History',
        definition: 'Test',
        image: require('../assets/images/glossary/history-bg.svg').default
    }
]

const Glossary = () => {

    const [currentWord, setCurrentWord] = useState('');
    const [currentBG, setCurrentBG] = useState('');

    const handleWordClick = (word, bg) => {
        setCurrentWord(word);
        setCurrentBG(bg);
    }

    return (
        <PageTransition>
            <div className="glossary-container">
                <section className="glossary">
                    <ul>
                        {GLOSSARY.map((item, index) => (
                            <li key={index} onClick={() => handleWordClick(item.definition, item.image)}>
                                {item.word}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="definition glossary-bg" style={{backgroundImage: `url(${currentBG})`}}>
                    <p>{currentWord}</p>
                </section>
            </div>
        </PageTransition>
    );
}

export default Glossary;