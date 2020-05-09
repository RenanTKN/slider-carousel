const Carousel = (elementId, options) => {
  let items;
  const container = document.getElementById(elementId);

  if (container) {
    const carousel = document.createElement("div");
    const imgPath = options.imgPath || "./";
    const size = options.size || 100;
    const offset = 10;
    const itemsLength = options.images.length;
    const info = options.info || false;
    let infoContainer;

    carousel.classList.add("carousel");
    container.appendChild(carousel);

    const leftBtn = document.createElement("div");
    leftBtn.innerHTML =
      '<i class="material-icons arrow-controls">arrow_left</i>';

    const rightBtn = document.createElement("div");
    rightBtn.innerHTML =
      '<i class="material-icons arrow-controls">arrow_right</i>';

    carousel.appendChild(leftBtn);
    carousel.appendChild(rightBtn);
    carousel.style.height = `${size + offset}px`;

    if (info) {
      infoContainer = document.createElement("div");
      infoContainer.classList.add("info-container");
      container.appendChild(infoContainer);
    }

    window.addEventListener("resize", () => {
      setItems();
    });

    rightBtn.addEventListener("click", () => {
      next();
    });

    leftBtn.addEventListener("click", () => {
      previous();
    });

    const getXPosition = (element) => {
      return element.getBoundingClientRect().left;
    };

    options.images.map((img) => {
      let item = document.createElement("div");
      item.classList.add("item");
      item.style.background = `#000 url(${imgPath}${img})`;
      item.style.backgroundSize = "cover";
      carousel.appendChild(item);
    });

    items = [...document.getElementsByClassName("item")];
    const originalItems = [...items];

    const setItems = () => {
      let center = getXPosition(carousel) + carousel.offsetWidth / 2;

      for (var i = 0; i < itemsLength / 2; i++) {
        const zIndex = Math.ceil(itemsLength / 2) - i;
        const index1 = Math.floor(itemsLength / 2) - i;
        const index2 = Math.floor(itemsLength / 2) + i;
        const opacity = 1 / (i / 4 + 1);

        let element1 = items[index1],
          element2 = items[index2];

        if (index1 !== index2) {
          const newSize = i * -2 * offset + size + offset;
          const position1 = center - size / 2 - (i * newSize) / 2,
            position2 = center + ((i - 1) * size) / 2;

          setSize(element1, newSize);
          setSize(element2, newSize);
          setPosition(element1, position1);
          setPosition(element2, position2);
          setZIndex(element1, zIndex);
          setZIndex(element2, zIndex);
          setOpacity(element1, opacity);
          setOpacity(element2, opacity);
        } else {
          setPosition(element1, center - size / 2);
          setZIndex(element1, zIndex);
          setOpacity(element1, opacity);
          setSize(element1, size);
        }
      }

      if (info) {
        infoContainer.innerHTML = getInfo();
      }
    };

    const setPosition = (item, position) => {
      item.style.left = `${position}px`;
    };

    const setSize = (element, size) => {
      element.style.width = `${size}px`;
      element.style.height = `${size}px`;
    };

    const setZIndex = (item, zIndex) => {
      item.style.zIndex = zIndex;
    };

    const setOpacity = (item, opacity) => {
      item.style.opacity = opacity;
    };

    const next = () => {
      items.unshift(...items.splice(-1));
      setItems();
    };

    const previous = () => {
      items.unshift(...items.splice(1));
      setItems();
    };

    const getInfo = () =>
      info[originalItems.indexOf(items[Math.floor(items.length / 2)])];

    setItems();
  }
};
