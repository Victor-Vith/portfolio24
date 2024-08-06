
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Victor-Vith/portfolio24/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
