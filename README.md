# Slider Carousel

## How to use
1. Import [carousel.js](./js/carousel.js) scritp.

1. Start the script using the `Carousel()` function.

1. Pass 2 parameters:
  - **id** of your target div that `Carousel` will be created.
  - **options** of your carousel
    - imgPath: path of your images (default is './')
    - size: size of the carousel images
    - images: array with filename of your images
    - info: array with the description that will be displayed for each image, you can use html. Use the same order of your `images` array (optional)

## Example of use

``` html
<div class="container" id="carouselContainer"></div>
<script>
  const info = [
    "<h1>Raposa</h1> Imagem de raposa",
    "<h1>Tigre</h1> Imagem de tigre",
    "<h1>Arara</h1> Imagem de arara",
  ];

  const options = {
    imgPath: "../img/",
    size: 150,
    images: [
      "fox-715588_1920.jpg",
      "tiger-3264048_1920.jpg",
      "ara-3601194_1920.jpg",
    ],
    info,
  };

  Carousel("carouselContainer", options);
</script>
```

## Stylize your elements

You can stylize the elements by yourself using the classes:

- carousel
  - The div that contain all items of the carousel
- arrow-controls
  - The arrows that controls your carousel
- info-container
  - The div that will display your descriptions
- item
  - The images of your carousel

Check the [index.css](./css/index.css) file to view the default settings.

## Demo

Check the [Slider Carousel Demo](https://suspicious-minsky-18a624.netlify.app/)