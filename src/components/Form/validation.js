const validation = (event, formData, setFormData) => {
  const input = event.target.name;
  const value = event.target.value;

  //   INPUT name

  if (input === 'name') {
    if (value.length === 0) {
      setFormData({
        ...formData,
        name: {
          value,
          error: 'Ingrese un nombre de raza.',
          valid: false,
        },
      });
      return;
    }
    if (!/^[a-zA-Z]+$/.test(value)) {
      setFormData({
        ...formData,
        name: {
          value,
          error: 'Ingrese un nombre válido.',
          valid: false,
        },
      });
      return;
    }
    setFormData({ ...formData, name: { value, valid: true } });
  }

  // INPUT minHeight

  if (input === 'minHeight') {
    if (value.length === 0) {
      setFormData({
        ...formData,
        minHeight: {
          value,
          error: 'Ingrese una altura mínima.',
          valid: false,
        },
      });
      return;
    }
    if (isNaN(value)) {
      setFormData({
        ...formData,
        minHeight: {
          value,
          error: 'Ingrese un número.',
          valid: false,
        },
      });
      return;
    }
    if (value <= 10) {
      setFormData({
        ...formData,
        minHeight: {
          value,
          error: 'Ingrese una altura mayor a 10cm.',
          valid: false,
        },
      });
      return;
    }
    if (value >= 100) {
      setFormData({
        ...formData,
        minHeight: {
          value,
          error: 'Ingrese una altura menor a 100cm.',
          valid: false,
        },
      });
      return;
    }
    setFormData({ ...formData, minHeight: { value, valid: true } });
  }

  // INPUT maxHeight

  if (input === 'maxHeight') {
    if (value.length === 0) {
      setFormData({
        ...formData,
        maxHeight: {
          value,
          error: 'Ingrese una altura máxima.',
          valid: false,
        },
      });
      return;
    }
    if (isNaN(value)) {
      setFormData({
        ...formData,
        maxHeight: {
          value,
          error: 'Ingrese un número.',
          valid: false,
        },
      });
      return;
    }
    if (value <= 10) {
      setFormData({
        ...formData,
        maxHeight: {
          value,
          error: 'Ingrese una altura mayor a 10cm.',
          valid: false,
        },
      });
      return;
    }
    if (value >= 100) {
      setFormData({
        ...formData,
        maxHeight: {
          value,
          error: 'Ingrese una altura menor a 100cm.',
          valid: false,
        },
      });
      return;
    }
    setFormData({ ...formData, maxHeight: { value, valid: true } });
  }

  // INPUT minWeigth

  if (input === 'minWeigth') {
    if (value.length === 0) {
      setFormData({
        ...formData,
        minWeigth: {
          value,
          error: 'Ingrese un peso mínimo.',
          valid: false,
        },
      });
      return;
    }
    if (isNaN(value)) {
      setFormData({
        ...formData,
        minWeigth: {
          value,
          error: 'Ingrese un número.',
          valid: false,
        },
      });
      return;
    }
    if (value <= 1) {
      setFormData({
        ...formData,
        minWeigth: {
          value,
          error: 'Ingrese un peso mayor a 1kg.',
          valid: false,
        },
      });
      return;
    }
    if (value >= 100) {
      setFormData({
        ...formData,
        minWeigth: {
          value,
          error: 'Ingrese un peso menor a 100kg.',
          valid: false,
        },
      });
      return;
    }
    setFormData({ ...formData, minWeigth: { value, valid: true } });
  }

  // INPUT maxWeigth

  if (input === 'maxWeigth') {
    if (value.length === 0) {
      setFormData({
        ...formData,
        maxWeigth: {
          value,
          error: 'Ingrese un peso máximo.',
          valid: false,
        },
      });
      return;
    }
    if (isNaN(value)) {
      setFormData({
        ...formData,
        maxWeigth: {
          value,
          error: 'Ingrese un número.',
          valid: false,
        },
      });
      return;
    }
    if (value <= 1) {
      setFormData({
        ...formData,
        maxWeigth: {
          value,
          error: 'Ingrese un peso mayor a 1kg.',
          valid: false,
        },
      });
      return;
    }
    if (value >= 100) {
      setFormData({
        ...formData,
        maxWeigth: {
          value,
          error: 'Ingrese un peso menor a 100kg.',
          valid: false,
        },
      });
      return;
    }
    setFormData({ ...formData, maxWeigth: { value, valid: true } });
  }

  // INPUT minLive

  if (input === 'minLive') {
    if (value.length === 0) {
      setFormData({
        ...formData,
        minLive: {
          value,
          valid: true,
        },
      });
      return;
    }
    if (isNaN(value)) {
      setFormData({
        ...formData,
        minLive: {
          value,
          error: 'Ingrese un número.',
          valid: false,
        },
      });
      return;
    }
    if (value <= 5) {
      setFormData({
        ...formData,
        minLive: {
          value,
          error: 'Ingrese una cantidad mayor a 5 años.',
          valid: false,
        },
      });
      return;
    }
    if (value >= 30) {
      setFormData({
        ...formData,
        minLive: {
          value,
          error: 'Ingrese una cantidad menor 30 años.',
          valid: false,
        },
      });
      return;
    }
    setFormData({ ...formData, minLive: { value, valid: true } });
  }

  // INPUT maxLive

  if (input === 'maxLive') {
    if (value.length === 0) {
      setFormData({
        ...formData,
        maxLive: {
          value,
          valid: true,
        },
      });
      return;
    }
    if (isNaN(value)) {
      setFormData({
        ...formData,
        maxLive: {
          value,
          error: 'Ingrese un número.',
          valid: false,
        },
      });
      return;
    }
    if (value <= 5) {
      setFormData({
        ...formData,
        maxLive: {
          value,
          error: 'Ingrese una cantidad mayor a 5 años.',
          valid: false,
        },
      });
      return;
    }
    if (value >= 30) {
      setFormData({
        ...formData,
        maxLive: {
          value,
          error: 'Ingrese una cantidad menor a 30 años.',
          valid: false,
        },
      });
      return;
    }
    setFormData({ ...formData, maxLive: { value, valid: true } });
  }

  // INPUT image

  if (input === 'image') {
    if (value.length === 0) {
      setFormData({
        ...formData,
        image: {
          value,
          valid: true,
        },
      });
      return;
    }
    if (!/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(value)) {
      setFormData({
        ...formData,
        image: {
          value,
          error: 'Ingrese una URL válida.',
          valid: false,
        },
      });
      return;
    }
    setFormData({ ...formData, image: { value, valid: true } });
  }
};

export default validation;
