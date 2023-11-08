// jadi kita akan membuat dynamic routing pada nextjs, pada file ini, penamaan [] (kurung kotak)
// adalah cara kita melakukan dynamic routing, karna nantinya, key dari querynya akan diambil dari
// apa yg kita tuliskan didalamnya, misalnya kita menuliskan [namaProduct],
// maka id akan menjadi key didalam obj query
// jadi, secara sederhana, ketika kita mengirimkan 'http://localhost:3000/products/sepatu-baru'
// maka, sepatu-baru akan otomatis berada didalam query.namaProduct

import { useRouter } from "next/router"; // untuk ambil detail request pada router

const DetailProductPage = () => {
    const {query} = useRouter()
    return(
        <div>
            <h2>Detail Product</h2>
            <p>Product : {query.namaProduct} </p>
        </div>
    )
}

export default DetailProductPage;