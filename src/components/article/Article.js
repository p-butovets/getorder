import parse from 'html-react-parser';
import Top from '../top/Top';
import './article.scss';

const Article = (props) => {

    const { showTopBar, text, articleText } = props;

    return (
        <>
            <Top showTopBar={showTopBar} text={text} backRoute={'/'} />
            <div className="article">
                {parse(articleText)}
            </div>
        </>
    );
}

export default Article;

