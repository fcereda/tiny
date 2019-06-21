import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {

    const formats = {
      pn: { block: 'p', classes: 'num', exact: true },
      h1: { block: 'h1', exact: true },
      h2: { block: 'h2', exact: true },
      h3: { block: 'h3', exact: true }, 
      alignleft: { selector: 'td', classes: 'left' },
      aligncenter: { selector: 'td', classes: 'center' },
      alignright: { selector: 'td', classes: 'right' },
      removeformat: [{
        selector: 'p', remove: 'all'
      }]
    }
    const style_formats = [
      { title: 'Numerado', format: 'pn' },
      { title: 'À esquerda', format: 'alignleft' },
      { title: 'Centralizado', format: 'aligncenter' },
      { title: 'À direita', format: 'alignright'}
    ]
    const block_formats = [
      { title: 'Parágrafo', format: 'p' },
      { title: 'Numerado', format: 'pn' },
      { title: 'Título 1', format: 'h1' },
      { title: 'Título 2', format: 'h2' },
      { title: 'Título 3', format: 'h3' }
    ]


    return (
      <div style={{display:'flex', flexDirection: 'column', height:'100%'}}>
      <Editor
        initialValue='<p class="num"> </p>'
        init={{
          plugins: 'link code advlist textpattern link lists quickbars table nonbreaking searchreplace spellchecker charmap',
          content_css: [
            'https://fonts.googleapis.com/css?family=Source+Serif+Pro&display=swap',
            'https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600,600i&display=swap',
            '/editor.css'
          ],
          content_style: "body {font-family: 'Source Serif Pro', serif; font-size:18px; padding-left: calc(50% - 35ch); padding-right: calc(50% - 35ch);}",          

          block_formats: 'Parágrafo=p; Par. numerado=pn; Título 1=h1; Título 2=h2; Título 3=h3',
          font_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,monospace; Source Serif=Source Serif Pro',
          fontsize_formats: '11px 12px 14px 15px 16px 17px 18px 24px 36px 48px',
          formats: formats,
          style_formats: style_formats,
          preview_styles: 'font-family font-weight',

          indentation : '2em',
          
          toolbar: 'formatselect | paste cut copy | undo redo | searchreplace | bold italic | numlist bullist | blockquote outdent indent | charmap table | code',
          quickbars_insert_toolbar: false,
          quickbars_selection_toolbar: 'bold italic | link | alignleft aligncenter alignright ',
          menubar: false,

          nonbreaking_force_tab: true,
          advlist_number_styles: 'decimal,lower-alpha,lower-roman,upper-alpha',
          spellchecker_language: 'pt_BR',

          textpattern_patterns: [
            {start: '--', replacement: '—'},
            {start: '#', format: 'h1'},
            {start: '##', format: 'h2'},
            {start: '###', format: 'h3'},
            {start: '* ', cmd: 'InsertUnorderedList'},
            {start: '- ', cmd: 'InsertUnorderedList'},
            {start: '1. ', format: 'pn'},
            {start: '2. ', format: 'pn'},
            {start: '3. ', format: 'pn'},
            {start: '1) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
            {start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
            {start: 'a) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
            {start: 'i. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }},
            {start: 'i) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-roman' }}
          ],

          contextmenu: "bold italic | link table spellchecker",

         
          min_height: 600,
          height: 700,
        }}
        onChange={this.handleEditorChange}
      />
      </div>
    );
  }
}

export default App;
