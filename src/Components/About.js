import React from "react";

export default function About(props) {
  return (
    <div className="container">
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div
          className="accordion-item"
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "#fff",
            color: props.mode === "dark" ? "#fff" : "#000",
          }}
        >
          <h1 className="accordion-header" style={{textAlign:'center'}}>{props.aboutText}</h1>
          <div className="accordion-body">
            <p>
              <span style={{color:props.mode==='dark'?'red':'blue',fontSize:'30px'}}>TextUtils</span> is an online tool for complete text
              analysis. Check the number of characters, words, sentences,
              paragraphs, used in your text or
              articel and also manipulate your text according to your needs.
            </p>
            <p>Sometimes we all need to analyze whatever we have written,
            especially if you work as a writer. Sometimes we all need to analyze
            whatever we have written, especially if you work as a writer. You
            need to check and count characters, words, sentences, and
            other things in your text to fulfill all guidelines. Well, with our
            TextUtils tool, this has never been easier. All you need to do
            is paste your text into the toolbox, and it will analyze the text
            for you.</p>
            <h5>You will then get to see many things about your text such
            as: </h5>
            <p>• Characters. <br />
            • Words. <br />
            • Sentences. <br />
            • Paragraphs.  <br />
            • See how much time to read.  <br />
            • Convert to UpperCase.  <br />
            • Convert to LowerCase.  <br />
            • Capitalize Case.  <br />
            • Reverse Text.  <br />
            • Remove Extra Space.  <br />
            • Bold Text.  <br />
            • Copy text And much more. <br />
            </p>
             In short, it is
            your one-stop-solution to all your text analysis needs. You can then
            modify your content accordingly and check again through our tool. It
            is a free and extremely powerful tool in analyzing the text in no
            time. No more worrying about not getting your work done on time or
            missing any guidelines. With this tool, you will know everything you
            need to about your content. What are you waiting for then? Paste
            some text now and see for yourself how easy and amazing our tool is.
            Once you use it, you will never look back. 
          </div>
        </div>
      </div>
    </div>
  );
}
