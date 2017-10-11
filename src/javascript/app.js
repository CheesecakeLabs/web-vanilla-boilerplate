// List your HTML dev files to Hot Reload it when changed
if (process.env.NODE_ENV !== 'production') {
  require('../../public/index.html')
}

// Custom import raw html files
// WARNING: It requires jQuery dependency include
// function loadTemplateParts() {
//   $('[html]').each(function() {
//     const file = $(this).attr('html')
//     const rawFile = require('raw-loader!../html/' + file)
//     $(this)
//       .before(eval(rawFile))
//       .remove()
//   })
//   if ($('[html]').length > 0) {
//     loadTemplateParts()
//   }
// }
// loadTemplateParts()

// Import styles to be processed
import styles from '../styles/styles.css'

// Include and initialize JS
