let a = [
    "Inializing hack tool...",
    "Scanning the computer...",
    "Setting up hacking environment",
    "Preparing to hack...",
    "Fetching the username...",
    "Trying out for passwords",
    "Password retrieved...",
    "The source is Hacked sucessfully"
]

const sleep = async(seconds) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(true);
        }, seconds*1000);
    })
}

const hack = async(message) => {
    await sleep(2);
    const initialDiv = document.getElementById("initial");
    const newLine = document.createElement("div");
    newLine.textContent = message;
    initialDiv.appendChild(newLine);
}

(async ()=> {
    for (let i=0; i<a.length; i++) {
        await hack(a[i]);
    }
})();





// let p1 = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("this is me1");
//             resolve("your computer has been hacked....");
//         }, 3000);
//     });
// };
// let p2 = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("this is me2");
//             resolve("your computer is being scanned.......");
//         }, 3000);
//     });
// };
// let p3 = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("this is me3");
//             resolve("secured information retrived....");
//         }, 3000);
//     });
// };
// let p4 = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("this is me4");
//             resolve("you can reach me ....");
//         }, 3000);
//     });
// };


// let run =  async() => {



//     try {
//         let ans1 = async () => {
//     let a = await p1(); 
//     document.getElementById("initial").innerHTML= a;
// };

// let ans2 = async () => {
//     let a = await p2(); 
//     document.getElementById("name").innerHTML= a;
// };

// let ans3 = async () => {
//     let a = await p3(); 
//     document.getElementById("insta").innerHTML= a;
// };

// let ans4 = async () => {
//     let a = await p4(); 
//     document.getElementById("username").innerHTML= a;
// };

//  // 🔥 Actually call them
//     await ans1();
//     await ans2();
//     await ans3();
//     await ans4();
        
//     } catch (error) {

//         console.error("Something went wrong:", error);
//         alert("Failed to load data. Please try again.");

//         // Optional: Show fallback message in UI
//         document.getElementById("initial").innerHTML = "Error";
//         document.getElementById("name").innerHTML = "Error";
//         document.getElementById("insta").innerHTML = "Error";
//         document.getElementById("username").innerHTML = "Error";
        
//     }



// }

// run();





