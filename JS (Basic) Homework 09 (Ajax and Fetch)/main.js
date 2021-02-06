fetch('https://jsonplaceholder.typicode.com/posts/23')
.then(response => response.json())
.then(
    json => {
       
        let postData = document.getElementById('post-data');

        let id = document.getElementById('id');
        id.append(json.id);

        let userId = document.getElementById('user-id');
        userId.append(json.userId);

        let body = document.getElementById('body');
        body.append(json.body);

        let title = document.getElementById('title');
        title.append(json.title);

    }
    )

.catch((error) => {
    console.error('Error:', error);
});

fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(
    json => {
       
       for( let i = 0; i < json.length; i++)
       {
            let title = json[i].title;
            let userId = json[i].userId;
            let id = json[i].id;

            let search = title.includes('omnis');
            if(search == true)
            {
                let omins = document.getElementById('omnis');
                let div = document.createElement('div');

                let albumNum = document.createElement('p');
                albumNum.append("Album number: " + (i+1))

                let idP = document.createElement('p');
                idP.append("Ip: " + id)

                let userIdP = document.createElement('p');
                userIdP.append("User Ip: " + userId)

                let titleP = document.createElement('p');
                titleP.append("Title: " + title)

                let br = document.createElement('hr');

                div.append(albumNum, idP, userIdP, titleP, br);
                omins.appendChild(div);
            }
       }
    }
    )

.catch((error) => {
    console.error('Error:', error);
});

const data = { name: 'Renata', username: 'Renata Username', email: 'renata@email.com', phone: '071111222', website: 'renata.com'};

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    let newUser = document.getElementById('new-user')

    let id = document.createElement('p');
    id.append("Id: " + data.id);

    let name = document.createElement('p');
    name.append("Name: " + data.name);

    let username = document.createElement('p');
    username.append("Username: " + data.username);

    let email = document.createElement('p');
    email.append("Email: " + data.email);

    let phone = document.createElement('p');
    phone.append("Phone: " + data.phone);

    let website = document.createElement('p');
    website.append("Website: " + data.website);

    newUser.append(id, name, username, email, phone, website);
})

.catch((error) => {
    console.error('Error:', error);
});
