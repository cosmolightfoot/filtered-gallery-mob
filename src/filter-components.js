const formNode = document.getElementById('filter-list');



export default function loadFilter(callback){
    function updateFilter(){
        const formData = new FormData(formNode);
        const userFilterInput = {
            keyword: formData.get('keyword'),
            horns: formData.get('horns')
        };
        callback(userFilterInput);
    }      
      
    updateFilter();

//we want to take user data and make it into an object
//we need a function outside of this file to use this object from within this function

    formNode.addEventListener('submit', event => {
        event.preventDefault();
        updateFilter();
    });

}
