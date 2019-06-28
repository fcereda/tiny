import React from 'react';

// React wrapper
import { Editor } from '@tinymce/tinymce-react';
import './tinymce-overrides.css';

class App extends React.Component {
  handleEditorChange = (e) => {
    // Esta função foi herdada do boilerplate do tinymce-react
    //console.log('Content was updated:', e.target.getContent());
  }

  render() {

    const formats = {
      pc: { block: 'p', remove: 'all', exact: true},  
      pn: { block: 'p', classes: 'num', remove: 'all', exact: true },
      tp: { block: 'p', classes: 'tp', remove: 'all', exact: true, split: false}, 
      infotp: { block: 'p', classes: 'infotp', remove: 'all', exact: true},
      h1: { block: 'h1', exact: true },
      h2: { block: 'h2', exact: true },
      h3: { block: 'h3', exact: true }, 
      assinat: { block: 'h6', remove: 'all', exact: true },
      alignleft: { selector: 'td', classes: 'left' },
      aligncenter: { selector: 'td', classes: 'center' },
      alignright: { selector: 'td', classes: 'right' },
      strikethrough: { inline: 'del', remove: 'all'}
    }
    const style_formats = [
      { title: 'Talking points', format: 'tp'},
      { title: 'Numerado', format: 'pn' },
      { title: 'Info em itálico', format: 'infotp'},
      { title: 'Normal', format: 'pc' },      
      { title: 'Título 1', format: 'h1' },
      { title: 'Título 2', format: 'h2' },
      { title: 'Título 3', format: 'h3' },
      { title: 'Assinatura', format: 'assinat'}
    ]

    return (
      <div style={{display:'flex', flexDirection: 'column', height:'100%'}}>
      <Editor
        initialValue='<p class="num"> </p>'
        init={{
          plugins: 'link code lists advlist textpattern table nonbreaking paste searchreplace spellchecker charmap fullscreen',
          content_css: [
            '/fonts/source-serif-pro/source-serif-pro.css',
            'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i|Fira+Sans:400,400i,500,500i|Nunito+Sans:400,400i,600,600i,700,700i&display=swap',
            'https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap',
            'https://fonts.googleapis.com/css?family=Barlow&display=swap',
            '/editor-content.css'
          ],
          content_style: "body {font-family: 'Source Serif Pro', serif; font-size:18px; padding-left: calc(50% - 35ch); padding-right: calc(50% - 35ch);}",
          block_formats: 'Numerado=pn; Talking point=tp; Info em itálico=infotp; Normal=pc; Título 1=h1; Título 2=h2; Título 3=h3; Assinatura=assinat',
          font_formats: 'Arial=arial,helvetica,sans-serif; Courier New=courier new,monospace; Source Serif=Source Serif Pro',
          fontsize_formats: '11px 12px 14px 15px 16px 17px 18px 24px 36px 48px',
          formats: formats,
          style_formats: style_formats,
          preview_styles: 'font-family font-size font-weight',
          
          valid_elements: 'a[href|target=_blank],br,strong/b,u,em/i,del/strike,sub,sup,' + 
            'blockquote,p[class|style],h1,h2,h3,h4,h5,h6,h7' + 
            'p[class]/div[class],' +   // Converte elementos <div> para <p>  
            'ol[style],ul[style],li[style],' + 
            'table[style|border|width|height|align|cellspacing|cellpadding],thead,tbody,tfoot,tr[style],td[style|class|width|height],th[style|class|width|height]',

          indentation : '2em',
          
          toolbar: 'formatselect | paste cut copy | undo redo | searchreplace | bold italic | numlist bullist | blockquote outdent indent | charmap table | zoomout zoomin code',
          menubar: false,
          statusbar: false,

          nonbreaking_force_tab: true,
          advlist_number_styles: 'lower-alpha,decimal,upper-alpha',
          language_url : '/tinymce/langs/pt_BR.js',
          language: 'pt_BR',
          spellchecker_language: 'pt_BR',
          entities: 'euro',

          paste_merge_formats: true,
          paste_retain_style_properties: '',
          paste_word_valid_elements: 'b,strong,i,em,u,sub,sup,strike,h1,h2,h3,p,table,tbody,thead,tfoot,tr,td,th,div,ol,ul,li,br,del',
          invalid_elements: 'pre',
          valid_classes: 'num tp infotp assinat left center right',
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
            {start: '>>', cmd: 'mceToggleFormat', value: 'tp'},
            {start: '* ', cmd: 'InsertUnorderedList'},
            {start: '- ', cmd: 'InsertUnorderedList'},
            {start: '1. ', format: 'pn'},
            {start: '2. ', format: 'pn'},
            {start: '3. ', format: 'pn'},
            {start: '1) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'decimal' }},
            {start: 'a. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
            {start: 'a) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'lower-alpha' }},
            {start: 'A. ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'upper-alpha' }},
            {start: 'A) ', cmd: 'InsertOrderedList', value: { 'list-style-type': 'upper-alpha' }},                        
          ],

          contextmenu: "copy cut paste | bold italic underline strikethrough | link table spellchecker",

          autosave_restore_when_empty: true,
          autosave_retention: "180m",
         
          min_height: 600,
          height: 700,


          init_instance_callback: function (editor) {
            editor.on('ExecCommand', function (e) {
              const blockFormats = ['pn', 'tp', 'infotp']
              if (e.command === 'mceToggleFormat') {
                let appliedFormat = e.value
                if (blockFormats.indexOf(appliedFormat) < 0) {
                  // Retorna se o formato aplicado não for um dos que usam a tag <p> 
                  return
                }
                //console.log('appliedFormat = ' + appliedFormat)
                let currentFormats = editor.formatter.matchAll(blockFormats)
                //console.log(currentFormats)
                currentFormats.forEach(thisFormat => {
                  if (thisFormat !== appliedFormat) {
                    //console.log('removendo formato ' + thisFormat)
                    editor.formatter.toggle(thisFormat)
                  }
                })
                editor.formatter.apply(appliedFormat)
                //console.log('mceToggleFormat was executed')
                //console.log(e)
              }
            });
          },
          

          setup: function (editor) {
            const ZOOMS = [0, 0.5, 0.65, 0.8, 0.9, 1, 1.05, 1.15, 1.25, 1.5, 2],
                minZoom = ZOOMS[1],
                maxZoom = ZOOMS[ZOOMS.length-1]
            let btnZoomIn,
                btnZoomOut

            const checkDisabledZooms = function (zoom) {
              btnZoomIn.setDisabled(zoom >= maxZoom)  
              btnZoomOut.setDisabled(zoom <= minZoom)
            }

            const increaseZoom = function (increment = 1) {
              const bodyElement = editor.dom.getRoot()
              const zoom = Number(editor.dom.getStyle(bodyElement, 'zoom', true))
              const zoomPosition = ZOOMS.indexOf(zoom)
              const newZoom = ZOOMS[zoomPosition + increment]
              if (!newZoom) {
                return zoom
              }
              editor.dom.setStyle(bodyElement, 'zoom', newZoom)
              return newZoom
            }

            const increaseZoomAndCheckButtons = (increment) => checkDisabledZooms(increaseZoom(increment))

            editor.on('init', function(e) {
              editor.execCommand('mceFullScreen')
              const bodyElement = editor.dom.getRoot()
              bodyElement.addEventListener('keydown', function (e) {
                // Captura o Ctrl-+ e Ctrl-- (Zoom In e Zoom Out)
                if (!e.ctrlKey)
                  return
                if (e.key === '+' || e.key === '-') {
                  let increment = e.key === '+' ? 1 : -1
                  increaseZoomAndCheckButtons(increment)    
                  e.preventDefault()
                  e.stopPropagation()
                }  
              })
            })

            editor.ui.registry.addButton('zoomin', {
              icon: 'zoom-in',
              tooltip: 'Aumentar zoom',
              disabled: false,
              onSetup: btn => btnZoomIn = btn,
              onAction: btn => {
                increaseZoomAndCheckButtons(1)
              },
            })

            editor.ui.registry.addButton('zoomout', {
              icon: 'zoom-out',
              tooltip: 'Reduzir zoom',
              disabled: false,
              onSetup: btn => btnZoomOut = btn,
              onAction: btn => {
                increaseZoomAndCheckButtons(-1)
              },
            })

          }    

        }}
        onChange={this.handleEditorChange}
      />
      </div>
    );
  }
}

export default App;
