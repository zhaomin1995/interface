
const latestDoc = null;

const loadNext = async () => {

    // Load next instance
    const ref = firebase
        .firestore()
        .collection('data')
        .startAfter(latestDoc || 0)
        .limit(1);
    const data = await ref.get();
    const instance = data.data();
    document.getElementById('image_link').src = instance.image_link;
    document.getElementById('location_q1').src = instance.location;
    document.getElementById('location_duration').src = instance.location;

    // Update latest doc
    latestDoc = data.docs[data.docs.length - 1];
}

// Wait for DOM content to load
window.addEventListener('DOMContentLoaded', () => loadNext());

// Load more data
const loadMore = document.getElementById('submitButton');
const handleClick = () => {
    loadNext();
}
loadMore.addEventListener('click', handleClick);
