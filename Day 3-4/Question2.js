  function copy() {
      const text = document.getElementById("x");
      const val = text.value;
      console.log(val);
      const text1 = document.getElementById("y");
      text1.value = val;
  }