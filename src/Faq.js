import React, { useState }  from 'react';
import ReactPlayer from 'react-player';
import './scrollbar.css';
import { loadFaqs } from './util';

const Faq = () => {
    const [openFaqs, setOpenFaqs] = useState({})
    const [faqs, setFaqs] = useState([])

    const videoPlayer = () => (<div>
        Video Player
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls />
        This is a description of the video
    </div>)
    
    if (faqs.length === 0) {
        const videoFaq = {
            id: 10,
            question: "Want to watch a video?",
            answer: videoPlayer(),
        }
        setFaqs([videoFaq, ...loadFaqs()])
    }

    const faqHeader = () => (<div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '95%',
        height: 75,
        margin: 10,
        border: '2px solid lightgray',
        borderRadius: 8,
        overflowX: 'hidden',
        overflowY: 'hidden',
    }}>
    
        <div style={{
            fontSize: 24,
            marginLeft: 20,
        }}>Frequently Asked Questions</div>
    </div>)

    const toggleQuestionOpen = id => {
        const qIsOpen = openFaqs[id]
        const oldOpenFaqs = {...openFaqs}
        oldOpenFaqs[id] = !qIsOpen
        setOpenFaqs(oldOpenFaqs)
    }

    const buildFaqEntry = faq => (<div key={faq.id}
        style={{
            width: '100%',
            margin: 5,
            padding: 5,
            fontSize: 20,
            color: 'white',
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 20,
                marginBottom: 0,
                padding: 10,
                backgroundColor: 'green',
                borderColor: 'green',
                borderWidth: 1,
                borderRadius: 8,
            }}
            onClick={()=>toggleQuestionOpen(faq.id)}>
                <div>{faq.question}</div>
                <div>{openFaqs[faq.id] ? '-' : '+'
                }</div>
            </div>
            {openFaqs[faq.id]
            ? (<div style={{
                margin: 20,
                padding: 10,
                color: 'green',
                backgroundColor: 'lightgray',
                borderColor: 'green',
                borderStyle: 'solid',
                borderWidth: 2,
                borderRadius: 8,
                }}>{faq.answer}</div>)
            : (<></>)}
        </div>)

    const faqList = faqs => faqs.map(faq => buildFaqEntry(faq))


    return (<div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '95vh',
        }}>
            {faqHeader()}
            <div className="customScrollbar"
            style={{        
                width: '95%', 
                overflow: 'auto', 
                overflowX: 'hidden',
                height: 'inherit', 
                display: 'block',
                backgroundColor: 'lightgray',
                border: '2px solid lightgray',
                borderRadius: 8,
            }}>
                {faqList(faqs)}
                {faqList(faqs)}
                {faqList(faqs)}
                {faqList(faqs)}
                {faqList(faqs)}
                {faqList(faqs)}
                {faqList(faqs)}
                {faqList(faqs)}
            </div>
        </div>)
}

export default Faq;