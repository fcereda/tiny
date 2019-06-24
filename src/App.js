import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (e) => {
    //console.log('Content was updated:', e.target.getContent());
  }

  render() {

    const formats = {
      pn: { block: 'p', classes: 'num', remove: 'all', exact: true },
      // O estilo abaixo é uma gambiarra para diferenciar o parágrafo normal do numerado. 
      // Quando o editor gera o HTML, este formato aparece como <p></p>, sem classes
      pc: { block: 'div', remove: 'all', exact: true},  
      h1: { block: 'h1', exact: true },
      h2: { block: 'h2', exact: true },
      h3: { block: 'h3', exact: true }, 
      alignleft: { selector: 'td', classes: 'left' },
      aligncenter: { selector: 'td', classes: 'center' },
      alignright: { selector: 'td', classes: 'right' },
    }
    const style_formats = [
      { title: 'Normal', format: 'pc' },
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
          plugins: 'link code lists advlist textpattern link table nonbreaking paste searchreplace spellchecker charmap',
          content_css: [
            'https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,400i,600i&display=swap',
            'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i|Fira+Sans:400,400i,500,500i|Nunito+Sans:400,400i,600,600i,700,700i&display=swap',
            'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap',
            '/editor-content.css'
          ],
          content_style: "body {font-family: 'Source Serif Pro', serif; font-size:18px; padding-left: calc(50% - 35ch); padding-right: calc(50% - 35ch);}",

          block_formats: 'Normal=pc; Numerado=pn; Título 1=h1; Título 2=h2; Título 3=h3',
          font_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,monospace; Source Serif=Source Serif Pro',
          fontsize_formats: '11px 12px 14px 15px 16px 17px 18px 24px 36px 48px',
          formats: formats,
          style_formats: style_formats,
          preview_styles: 'font-family font-size font-weight',
          
          valid_elements: 'a[href|target=_blank],strong/b,strong/u,em/i,del/strike,p[class],ol[style,class],ul[style,class],li[style,class],table[style,class],thead,tbody,tfoot,td[style,class],th[style,class],br',

          indentation : '2em',
          
          toolbar: 'formatselect | paste cut copy | undo redo | searchreplace | bold italic strikethrough | numlist bullist | blockquote outdent indent | charmap table | code',
          menubar: false,

          nonbreaking_force_tab: true,
          advlist_number_styles: 'decimal,lower-alpha,lower-roman,upper-alpha',
          spellchecker_language: 'pt_BR',
          entities: 'euro',

          paste_merge_formats: true,
          paste_retain_style_properties: '',
          paste_word_valid_elements: 'b,strong,i,em,h1,h2',
          invalid_elements: 'pre',
          valid_classes: 'num left center right',
          valid_styles: {
            'table':   'width, min-width',
            'td': 'width',
            'div': 'width,height'
          },

          table_default_styles: {
          },
          table_responsive_width: true,
          table_advtab: false,
          table_cell_advtab: false,
          table_row_advtab: false,
          table_toolbar: "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol | alignleft aligncenter alignright",

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
