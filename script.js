const imageDiv = document.querySelector('.imageDiv')
const buttons = document.querySelectorAll('button')


const images = [
    "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
    "https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_398/reconnect_with_nature.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82&w=600c=1050%2C550&w=1050",
    "https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_2a7jSNbOYscCPNxad3D5QeGucgMnWfYyQ&usqp=CAU",
    "https://www.euroschoolindia.com/wp-content/uploads/2023/07/nature-conservation.jpg"
]


let imageIndex = 0

buttons[0].onclick = () => {
    imageIndex--
    if (imageIndex < 0) imageIndex = images.length - 1
    imageDiv.style.backgroundImage = `url("${images[imageIndex]}")`
}


buttons[1].onclick = () => {
    imageIndex++
    if (imageIndex === images.length) imageIndex = 0
    imageDiv.style.backgroundImage = `url("${images[imageIndex]}")`
}


