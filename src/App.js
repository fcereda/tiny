import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class App extends React.Component {
  handleEditorChange = (e) => {
    //console.log('Content was updated:', e.target.getContent());
  }

  render() {

    const formats = {
      pn: { block: 'p', classes: 'num', remove: 'all', exact: true },
      pc: { block: 'p', remove: 'all', exact: true},  
      h1: { block: 'h1', exact: true },
      h2: { block: 'h2', exact: true },
      h3: { block: 'h3', exact: true }, 
      alignleft: { selector: 'td', classes: 'left' },
      aligncenter: { selector: 'td', classes: 'center' },
      alignright: { selector: 'td', classes: 'right' },
      strikethrough: { inline: 'del', remove: 'all'}
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
          plugins: 'link code lists advlist textpattern link table nonbreaking paste searchreplace spellchecker charmap fullscreen',
          content_css: [
            'https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600,400i,600i&display=swap',
            'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i|Fira+Sans:400,400i,500,500i|Nunito+Sans:400,400i,600,600i,700,700i&display=swap',
            'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap',
            '/editor-content.css'
          ],
          content_style: "body {font-family: 'Source Serif Pro', serif; font-size:18px; padding-left: calc(50% - 35ch); padding-right: calc(50% - 35ch);}",

          block_formats: 'Numerado=pn; Normal=pc; Título 1=h1; Título 2=h2; Título 3=h3',
          font_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,monospace; Source Serif=Source Serif Pro',
          fontsize_formats: '11px 12px 14px 15px 16px 17px 18px 24px 36px 48px',
          formats: formats,
          style_formats: style_formats,
          preview_styles: 'font-family font-size font-weight',
          
          valid_elements: 'a[href|target=_blank],br,strong/b,u,em/i,del/strike,sub,sup,' + 
            'blockquote,p[class|style],h1,h2,h3,h4,h5,h6,' + 
            'p[class]/div[class],' +   // Converte elementos <div> para <p>  
            'ol[style],ul[style],li[style],' + 
            'table[style|border|width|height|align|cellspacing|cellpadding],thead,tbody,tfoot,tr[style],td[style|class|width|height],th[style|class|width|height]',

          indentation : '2em',
          
          toolbar: 'formatselect | paste cut copy | undo redo | searchreplace | bold italic strikethrough | numlist bullist | blockquote outdent indent | charmap table | zoomin zoomout code',
          menubar: false,

          nonbreaking_force_tab: true,
          advlist_number_styles: 'decimal,lower-alpha,lower-roman,upper-alpha',
          spellchecker_language: 'pt_BR',
          entities: 'euro',

          paste_merge_formats: true,
          paste_retain_style_properties: '',
          paste_word_valid_elements: 'b,strong,i,em,u,sub,sup,strike,h1,h2,h3,p,table,tbody,thead,tfoot,tr,td,th,div,ol,ul,li,br,del',
          invalid_elements: 'pre',
          valid_classes: 'num left center right',
          valid_styles: {
            'table':   'width, min-width',
            'td': 'width',
            'div': 'width,height',
            'ul': 'list-style-type',
            'ol': 'list-style-type',
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

          setup: function(editor) {

            const increaseBodyFontSize = function (increment = 1) {
              const bodyElement = editor.dom.getRoot()
              const fontSize = parseInt(editor.dom.getStyle(bodyElement, 'font-size', true))

              if (increment < 1) {
                if (fontSize < 13) return
                increment = fontSize > 20 ? -2 : -1 
              }
              else {
                if (fontSize > 40) return
                increment = fontSize >= 20 ? 2 : 1
              }
              editor.dom.setStyle(bodyElement, 'font-size', `${parseInt(fontSize) + increment}px`)
            }

            const increaseZoom = function (increment = 1) {
              const bodyElement = editor.dom.getRoot()
              const zoom = Number(editor.dom.getStyle(bodyElement, 'zoom', true))
              const ZOOMS = [0, 0.5, 0.65, 0.8, 0.9, 1, 1.1, 1.25, 1.5, 2, 0]
              console.log(`zoom: ${zoom}`)
              let zoomPosition = ZOOMS.indexOf(zoom)
              console.log(`zoomPosition = ${zoomPosition}`)
              let newZoom = ZOOMS[zoomPosition + increment]
              if (!newZoom) {
                return
              }
              editor.dom.setStyle(bodyElement, 'zoom', newZoom)
            }

            editor.on('init', function(e) {
              editor.execCommand('mceFullScreen')
            })

            editor.ui.registry.addButton('zoomin', {
              icon: 'zoom-in',
              tooltip: 'Aumentar tamanho da letra',
              disabled: false,
              onAction: function (_) {
                //increaseBodyFontSize()    
                increaseZoom()
              },
            })

            editor.ui.registry.addButton('zoomout', {
              icon: 'zoom-out',
              tooltip: 'Reduzir tamanho da letra',
              disabled: false,
              onAction: function (_) {
                //increaseBodyFontSize(-1)    
                increaseZoom(-1)
              },
            })

          },    

          init_instance_callback: function (editor) {
            editor.on('PreProcess', function (e) {
              console.log(e.node);
            });
          },  

        }}
        onChange={this.handleEditorChange}
      />
      </div>
    );
  }
}

export default App;
