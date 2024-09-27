var img;


img = ['https://plus.unsplash.com/premium_photo-1697729979889-31ec7ecf6f06?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1703355799536-50427a7e647f?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1632798121054-c6b73cc9e8b0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1698760042584-20ec778e665b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'];
let element_photo = document.getElementById('photo');
element_photo.setAttribute("src", img[0]);


document.getElementById('second').addEventListener('click', (event) => {
  let element_photo2 = document.getElementById('photo');
  img.push(img.shift());
  element_photo2.setAttribute("src", img[0]);

});

document.getElementById('third').addEventListener('click', (event) => {
  let element_photo3 = document.getElementById('photo');
  img.unshift(img.shift());
  element_photo3.setAttribute("src", img.slice(-1)[0]);

});
