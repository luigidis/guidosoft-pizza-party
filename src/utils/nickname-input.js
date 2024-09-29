export function nicknameInput(element) {
    let nickname = '';

    // Create input element
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Inserisci il tuo Nickname';

    // Create an elemento to visualize nickname;
    const display = document.createElement('p');
    display.textContent = 'Nickname';

    //Function to update nickname

    const setNickname = (value) => {
        nickname = value;
        display.textContent = `Il tuo Nickname è ${nickname}`;
    }

    input.addEventListener('input', (event) => setNickname(event.target.value));

    element.appendChild(input);
    element.appendChild(display);

    //Init with empty value
    setNickname('');
}