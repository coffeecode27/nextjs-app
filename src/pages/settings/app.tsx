// kita juga bisa melakukan nested routing didalam pages, artinya, kita bisa membuat lebih dari satu file
// dalam satu folder(untuk parent routing-nya), dan file-file tersebut menjadi child route
// misalnya app.tsx adalah child routing dari parent routing settings

const AppSettingPage = () => {
    return (
        <div>
            <h2>App Setting Page</h2>
        </div>
    );
};

export default AppSettingPage;