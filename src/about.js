function createAbout(){
    const aboutUs = document.createElement("div")
    aboutUs.id = "aboutUs"

    const firstGraph = document.createElement("p")
    firstGraph.innerText = `Nestled amidst the lush landscapes, our restaurant celebrates the beauty of seasonal, locally sourced ingredients. With each plate, we endeavor to highlight the vibrant flavors and textures that our region has to offer. From hand-picked heirloom vegetables to farm-fresh meats, every element of your meal is a testament to our dedication to authenticity.`
    aboutUs.appendChild(firstGraph)

    const secondGraph = document.createElement("p")
    secondGraph.innerText = `Our team of passionate chefs transforms these premium ingredients into gastronomic masterpieces that ignite the senses. The harmonious marriage of flavors, colors, and textures creates a symphony on your palate, celebrating the true essence of farm-to-table cuisine.`
    aboutUs.appendChild(secondGraph)

    /*break*/

    const thirdGraph = document.createElement("p")
    thirdGraph.innerText = `Beyond our culinary prowess, we take pride in our sustainable practices. Our farm not only supplies our kitchen but also nurtures the environment. We embrace responsible farming techniques that prioritize soil health, biodiversity, and ethical treatment of animals.`
    aboutUs.appendChild(thirdGraph)


    const fourthGraph = document.createElement("p")
    fourthGraph.innerText = `Join us for an unforgettable culinary journey that honors the land and its bounty. Our farm-to-table philosophy ensures that every dish is a tribute to nature's finest, served with the utmost elegance and care. Discover the art of fine dining while savoring a symphony of flavors that are as fresh as the morning dew.`
    aboutUs.appendChild(fourthGraph)

    return aboutUs
}

export default createAbout;