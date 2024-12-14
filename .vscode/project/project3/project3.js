document.addEventListener("DOMContentLoaded",function(){

    const searchbtn = document.getElementById("search-btn");
    const user_input = document.getElementById("user-input");
    const progress_level = document.querySelector(".progress_level");
    const easy_progress = document.querySelector(".easy");
    const medium_progress = document.querySelector(".medium");
    const hard_progress = document.querySelector(".hard");
    const easy_label = document.getElementById("easy-label");
    const medium_label = document.getElementById("medium-label");
    const hard_lebel = document.getElementById("hard-label");
    const statCardContainer = document.querySelector(".data");

    //validating input username
    function isValidating(username){
        if(username.trim() === ""){
            console.log("username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username); //true or false
        if(!isMatching){
            alert("Invalid Username");
        }
        return isMatching;
    }


    async function fetchUserdetails(username){
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try{

            searchbtn.textContent = "searching...";
            searchbtn.disabled = true;
            progress_level.style.display = "none";

            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Unable to get user details");
            }
            const data = await response.json();
            console.log("logging username" , data);

            displayUserData(data);
        }
        catch(error){
            // progress_level.innerHTML = `<p> No Data Found </p>`;
            progress_level.innerHtml = `<p> ${error.message} </p>`

        }
        finally{
            searchbtn.textContent = "search";
            searchbtn.disabled = false;
            progress_level.style.display = "flex";

        }

    }



    function updateProgress(solved,total,label,circle){
        const progessDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree",`${progessDegree}%`);
        label.textContent = `${solved}/${total}`;

    }

    function displayUserData(data){
        const totalQuestion = data.totalQuestions;
        const easyQustions = data.totalEasy;
        const mediumQuestions = data.totalMedium;
        const hardQuestions = data.totalHard;

        const userTotalSolved = data.totalSolved;
        const userEasySolved = data.easySolved;
        const userMediumSolved = data.mediumSolved;
        const userHardSolved = data.hardSolved;

        updateProgress(userEasySolved,easyQustions,easy_label,easy_progress);
        updateProgress(userMediumSolved,mediumQuestions,medium_label,medium_progress);
        updateProgress(userHardSolved,hardQuestions,hard_lebel,hard_progress);

        // const acceptanceRate = data.acceptanceRate;
        // const rank = data.ranking;
        // const contributionPoints = data.contributionPoints;

        const cardData = [
            {label:"Acceptance Rate",value:data.acceptanceRate},
            {label:"Rank",value:data.ranking},
            {label:"Contribution Points",value:data.contributionPoints}
        ];

        console.log(cardData);

        statCardContainer.innerHTML = cardData.map(
            datas => 
                  `
                   <div class="card">
                   <h3>${datas.label}</h3>
                   <p>${datas.value}</p>
                   </div>                
                `            
        ).join("")

    }

    searchbtn.addEventListener('click', function(){
        const username = user_input.value;
        console.log("loggin username" , username);
        if(isValidating(username)){
            fetchUserdetails(username);

        }
    })
})