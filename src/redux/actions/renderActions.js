export function changeRender(render) {
  const item = () => {
    if (render === false) return true;
    else return false;
  };
  return {
    type: "Change",
    payload: item,
  };
}

export function getRender() {
  return {
    type: "Get",
  };
}
