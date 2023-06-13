var users = []
var posts = []

// TODO User POPULATION

users.push({
    name: 'Kindney Kevin',
    email: 'kidney@kevin.com',
    password: '1',
    favs: ['post-2']
})

users.push({
    name: 'Jorg S',
    email: 'jorg@schwegenheim',
    password: '1',
    favs: ['post-1']
})

users.push({
    name: 'Maka Knacker',
    email: 'makar@kancker',
    password: '1',
    favs: ['post-1', 'post-2']
})

posts.push({
    id: 'post-1',
    user: users[0].email,
    text: 'Kidney',
    picture:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.buzzfeed.com%2Fbuzzfeed-static%2Fstatic%2F2018-09%2F24%2F6%2Fcampaign_images%2Fbuzzfeed-prod-web-05%2F16-imagenes-de-stock-que-darian-para-hacer-la-pel-2-1792-1537786166-2_dblbig.jpg%3Fresize%3D1200%3A*&tbnid=nFfrz3_4huaPhM&vet=12ahUKEwjm07-c3v7-AhV1nCcCHSTaBA4QMygOegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fwww.buzzfeed.com%2Fbeatrizserranomolina%2Fsinopsis-imagenes-stock&docid=8s49BN1Ms4ygCM&w=1200&h=797&q=stock%20pictures&ved=2ahUKEwjm07-c3v7-AhV1nCcCHSTaBA4QMygOegUIARD9AQ',
    date: new Date,
    likes: ['makar@knacker', 'kidney@kevin.com'],
    visibility: 'public',
    price: 10
})

posts.push({
    id: 'post-2',
    user: users[1].email,
    text: 'Kaiserschamrn und Daimler fahrn',
    picture: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.buzzfeed.com%2Fbuzzfeed-static%2Fstatic%2F2018-09%2F24%2F6%2Fcampaign_images%2Fbuzzfeed-prod-web-05%2F16-imagenes-de-stock-que-darian-para-hacer-la-pel-2-1792-1537786166-2_dblbig.jpg%3Fresize%3D1200%3A*&tbnid=nFfrz3_4huaPhM&vet=12ahUKEwjm07-c3v7-AhV1nCcCHSTaBA4QMygOegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fwww.buzzfeed.com%2Fbeatrizserranomolina%2Fsinopsis-imagenes-stock&docid=8s49BN1Ms4ygCM&w=1200&h=797&q=stock%20pictures&ved=2ahUKEwjm07-c3v7-AhV1nCcCHSTaBA4QMygOegUIARD9AQ',
    date: new Date,
    likes: ['kidney@kevin.com'],
    visibility: 'public',
    price: 0
})

posts.push({
    id: 'post-3',
    user: users[2].email,
    text: 'wagwan',
    picture: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.buzzfeed.com%2Fbuzzfeed-static%2Fstatic%2F2018-09%2F24%2F6%2Fcampaign_images%2Fbuzzfeed-prod-web-05%2F16-imagenes-de-stock-que-darian-para-hacer-la-pel-2-1792-1537786166-2_dblbig.jpg%3Fresize%3D1200%3A*&tbnid=nFfrz3_4huaPhM&vet=12ahUKEwjm07-c3v7-AhV1nCcCHSTaBA4QMygOegUIARD9AQ..i&imgrefurl=https%3A%2F%2Fwww.buzzfeed.com%2Fbeatrizserranomolina%2Fsinopsis-imagenes-stock&docid=8s49BN1Ms4ygCM&w=1200&h=797&q=stock%20pictures&ved=2ahUKEwjm07-c3v7-AhV1nCcCHSTaBA4QMygOegUIARD9AQ',
    date: new Date,
    likes: [],
    visibility: 'public',
    price: 0
})

posts.push({
    id: 'post-4',
    user: users[0].email,
    text: 'lmao',
    picture: '//m.media-amazon.com/images/I/41xO6ULkGcL._UX716_FMwebp_QL85_.jpg',
    date: new Date,
    likes: ['kidney@kevin.com', 'makar@knacker'],
    visibility: 'public',
    price: 5
})
