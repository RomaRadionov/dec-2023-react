const Post = ({post, setPost}) => {
    const {id, title} = post;
    // console.log(post);
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={() => setPost(post)}>details</button>
        </div>
    );
};

export {Post};