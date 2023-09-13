    const triangleForm = document.querySelector('#triangleForm');
    const resultDiv = document.querySelector('#result');

    triangleForm.addEventListener('submit', function (event) {
        event.preventDefault();//to prevent submit button from reloading the whole page

        const side1 = parseFloat(document.querySelector('#side1').value);
        const side2 = parseFloat(document.querySelector('#side2').value);
        const side3 = parseFloat(document.querySelector('#side3').value);

        if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) {
            if(isTriangle(side1,side2,side3)){
            const area = calculateTriangleArea(side1, side2, side3);
            resultDiv.textContent = `The area of the triangle is: ${area.toFixed(2)} m²`;
            }
            else{
                resultDiv.textContent=`This is not a valid Triangle`;
            }
        } else {
            resultDiv.textContent = 'Invalid input. Please enter valid numbers for all sides.';
        }
    });

    var calculateTriangleArea=(side1, side2, side3)=> {
        const halfPerimeter = (side1 + side2 + side3) / 2;
        const area = Math.sqrt(
            halfPerimeter *
            (halfPerimeter - side1) *
            (halfPerimeter - side2) *
            (halfPerimeter - side3)
        );
        return area;
    }

   var isTriangle=(side1, side2, side3)=> {
        return (
          side1 + side2 > side3 &&
          side1 + side3 > side2 &&
          side2 + side3 > side1
        );
      }




