

































// function cell(rowNum, cellNum) {
//   var isCellEven = true;
//   var isRowEven = true
//   if (cellNum % 2 == 1) isRowEven = false
//   if (cellNum % 2 == 1) isCellEven = false;
  
  
//   if (isCellEven != isRowEven) {
//    let cellString =  `<div id= "cell-${rowNum}-${cellNum}" class= "cell black">`
//             if(rowNum <= 3){
//                 cellString = cellString + `<div class = "checker black-checker></div>`
//             } else if (rowNum >= 6){
//                cellString = cellString + `<div class= "checker red-checker" ></div>`
                
//             } else {
//                 cellString = cellString +`<div class = "checker black-checker></div> `
//             }
//            cellString= cellString +`</div>`
//            return cellString
//             ;
//   } else 
//         return `<div id= 'cell-${rowNum}-${cellNum}' class = 'cell red'></div>`;
// }

// function rowTemplate(rowNum) {
//     var rowString = "";
//    rowString + rowString + `<div id=" row-${rowNum}" class="row">`
//     for (let i = 1; i <= 8; i++) {
//         rowString = rowString + cell(rowNum, i);
//     }
//    rowString = rowString + `</div>`
//     return rowString
// }

// function boardTemplate(){
//     var boardString = "";
//     for (let i = 1; i <= 8; i++) {
//         boardString= boardString + rowTemplate(i);
//     }
//     return boardString
// }


// // var rowTemplate = `
// // ${cell(1, 1)}
// // ${cell(1, 2)}
// // ${cell(1, 3)}
// // ${cell(1, 4)}
// // ${cell(1, 5)}
// // ${cell(1, 6)}
// // ${cell(1, 7)}
// // ${cell(1, 8)}`;