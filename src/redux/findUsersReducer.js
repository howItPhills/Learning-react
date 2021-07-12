let inintialState = {
   users: [
      { id: '1', name: 'Sveta,', age: 25, city: 'Minsk', src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.materialicious.com%2Fimages%2Flifestyle-female-portrait-photography-by-alessandro-bondielli-o.jpg&f=1&nofb=1' },
      { id: '2', name: 'Lena,', age: 22, city: 'Grodno', src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.materialicious.com%2Fimages%2Flifestyle-female-portrait-photography-by-alessandro-bondielli-o.jpg&f=1&nofb=1' },
      { id: '3', name: 'Vika,', age: 23, city: 'Vitebsk', src: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.materialicious.com%2Fimages%2Flifestyle-female-portrait-photography-by-alessandro-bondielli-o.jpg&f=1&nofb=1' },
   ],
}

export const findUsersReducer = (state = inintialState, action) => {
   return state;
}