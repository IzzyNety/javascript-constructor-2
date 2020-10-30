import image from './assets/cat_coffee.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `Усталый Izzy.nety пытается программировать`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript', {
    tag: 'h2',    
    styles: {
      background: `linear-gradient(to right, #ff0099, #493240)`,
      color: `#fff`,
      padding: `1.5rem`,
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
new ColumnsBlock([
  'Приложение на чистом JavaScript, без использования библиотек',
  'Пускай будет Lorem10 но он все равно не добавится)))',
  'Чашечку чая, либо кофе пожалуйста) хотя бы за старания)'
], {
  styles: {
    background: `linear-gradient(to bottom, #8e2de2, #4a00e0)`,
    padding: '2rem',
    color: '#fff',
    'font-weight': 'bold'
  }
}),
new TextBlock(text, {
  styles: {
    background: 'linear-gradient(to left, #f2994a, #f2c94c)',
    padding: `1rem`,
    'font-weight': 'bold'
  }
})

]