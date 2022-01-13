// try {
//     console.log("Начало блока try")
//     lalala
//     console.log('Конец блока try (никогда не выполнится)')
// } catch (err) {
//     console.log(`Возникла ошибка!`, err)
// } finally{
//     console.log('Срабатывает всегда')
// }

// try {
//     lalala
// } catch (error) {
//     console.log(error.name) // понятное человеку сообщение
//     console.log(error.message) // строка с именем ошибки  
//     console.log(error)
// }


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('done')
//     }, 1000)
// })

// promise
//     .then((result) => console.log('result', result))
//     .catch((error) => console.log('error', error))
//     .finally(() => console.log('finally'))


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("text");
//     }, 1000);
//   })
//     .then((result) => {
//       console.log(result);
//     })
//     .then((result) => {
//       new Promise((resolve, reject) => {
//         setTimeout(() => {
//           console.log("1");
//           resolve("data - result 2");
//         }, 3000);
//       }).then((data) => {
//         setTimeout(() => {
//           console.log("2");
//           console.log(data);
//         }, 1000);
//       });
//     })
//     .catch((error) => console.log("error ====>", error))
//     .finally(() => console.log("finally"));

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 2000)
// console.log(3)

// new Promise((res, rej) => {
//     res()
// }).then((result) => {
//     console.log(1)
//     new Promise((res, rej) => {
//         setTimeout(() => {
//             console.log(2)
//             res()
//         }, 2000)
//     }).then((result)=> {
//         console.log(3)
// })
// })
//     .catch((err) => console.log(err))

// Promise.all([
//     new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка')), 2000)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
// ]).catch((err) => console.log(err))


// Promise.race([
//     new Promise((resolve) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка')), 2000)),
//     new Promise((resolve) => setTimeout(() => resolve(3), 3000)),
// ]).then((err) => console.log(err)) // возвращает первый выполнившився результат


// const getSumm = (a,b) => {
//     return new Promise((resolve, reject) => {
//         if(!Number(a) && a !== 0){
//             reject('!!! type')
//         } else {
//             resolve(a + b)
//         }
//     })
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
// }

// getSumm('q', 6)
// // getSumm(3, 6)

// const func = async () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Готово!'), 1000)
//     })

//     const result = await promise 

//     console.log(result)
// }

// func()          


// const func = async () => {
//   console.log("1");

// //   let result = await (
// //     await fetch("https://jsonplaceholder.typicode.com/todos/")

//     const result = await (await fetch("https://jsonplaceholder.typicode.com/todos/")).json()

//   console.log(result);

//   console.log("3");
// };

// func();

// let promise = new Promise((resolve, reject) => {
//   // функция-исполнитель (executor)
// Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.
// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
// result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).
// });


//----------------AJAX-----------

// const func = async () => {
//   let result

//   try{
//     result  (
//       await fetch("https://jsonplaceholder.typicode.com/todos/"))
//   }
//   catch (error) {}

//   console.log(result)
// }


// let url = new URL('https://jsonplaceholder.typicode.com/posts?userId=1')
// console.log(url)

// const tbody = document.getElementById('tbody')

// const drawTable = (array) => {
//   array.forEach(item => {
//     tbody.innerHTML += `
//     <tr>
//       <td style="border: 1px solid black;">${item.id}</td>
//       <td style="border: 1px solid black;">${item.name}</td>
//       <td style="border: 1px solid black;">${item.username}</td>
//       <td style="border: 1px solid black;">${item.email}</td>
//       <td style="border: 1px solid black;">${item.phone}</td>
//       <td style="border: 1px solid black;">${item.address.street}</td>
//     </tr>`
//   });
// }

// const user = async () => {
//     const result = await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
//     result.sort((a,b) => a.name > b.name ? 1 : -1)
//     drawTable(result)
// }
// user()

const btnBlock = document.getElementById('btnBlock')
const postBlock = document.getElementById('postBlock')

const drawPosts = (arr, number) => {
    postBlock.innerHTML = ''
    
    for(let i=number*10-10;i<number*10;i++){
      postBlock.innerHTML += `
      <div style="border: 1px solid black;">
      <p>id: ${arr[i].id}</p>
      <p>title: ${arr[i].title}</p>
      <p>body: ${arr[i].body}</p>
      </div>`
    }
  
}
const post = async () => {
  const result = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
  console.log(result)
  const btnNumber = result.length / 10

  for(let i=0;i<btnNumber;i++){
    btnBlock.innerHTML += `
    <button id='${i+1}'>btn${i+1}</button>`
  }
  btnBlock.addEventListener('click', (event) => {
    const idBtn = event.target.id
    drawPosts(result,idBtn)
  })

}
post()



