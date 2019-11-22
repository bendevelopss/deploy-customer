import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

export function getData() {
    return {
        package: {
            images: [
                { image: work1, index: 0, selected: false, favorite: false, name: "photo-0001.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work2, index: 1, selected: false, favorite: false, name: "photo-0002.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work3, index: 2, selected: false, favorite: false, name: "photo-0003.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work4, index: 3, selected: false, favorite: false, name: "photo-0004.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work5, index: 4, selected: false, favorite: false, name: "photo-0005.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work1, index: 5, selected: false, favorite: false, name: "photo-0006.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work2, index: 6, selected: false, favorite: false, name: "photo-0007.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work3, index: 7, selected: false, favorite: false, name: "photo-0008.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work4, index: 8, selected: false, favorite: false, name: "photo-0009.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work5, index: 9, selected: false, favorite: false, name: "photo-0010.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work1, index: 10, selected: false, favorite: false, name: "photo-0011.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work2, index: 11, selected: false, favorite: false, name: "photo-0012.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work3, index: 12, selected: false, favorite: false, name: "photo-0013.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work4, index: 13, selected: false, favorite: false, name: "photo-0014.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work5, index: 14, selected: false, favorite: false, name: "photo-0015.jpg", album: [], digital: [], loose: [], wallArt: [] },
                { image: work1, index: 15, selected: false, favorite: false, name: "photo-0016.jpg", album: [], digital: [], loose: [], wallArt: [] }
            ],
            page_album: 5,
            four_r_photos: 3,
            digitalPrint: 10
        },
        specialPackage: {
            availed: false,
            packageName: "Creative Session",
            packagePrice: 420,
            description: "",
            totalInvestment: [
                { name: "Creative Session" },
                { name: "Collection OR Creative Session" },
                { name: "Ala Carte Products" }
            ],
            collection: [
                { name: "10 Photos for 10 pages album" },
                { name: "20 Photos for 4R loose print" },
                { name: "10 Photos for 5R loose print" },
                { name: "10 Photos for 10 digital print" },
                { name: "20 photos for 15 pages album" }
            ]
        },
        packageType: [
            {
                name: "album",
                type: [
                    { name: "10 pages" },
                    { name: "15 pages" },
                    { name: "20 pages" },
                    { name: "30 pages" },
                ]
            },
            {
                name: "digital print",
                type: [
                    { name: "1 x 15 pages album" },
                    { name: "10 x 4R photos" },
                    { name: "10 x digital print" },
                ]
            },
            {
                name: "loose print",
                type: [
                    { name: "1 x 15 pages album" },
                    { name: "10 x 4R photos" },
                    { name: "10 x digital print" },
                ]
            },
            {
                name: "wall art",
                type: [
                    { name: "1 x 15 pages album" },
                    { name: "10 x 4R photos" },
                    { name: "10 x digital print" },
                ]
            },
        ],
        customer: {
            customerName: "Bambini International",
            email: "bambini@international@gmail.com",
            phone: "02-687-3289",
        },
        order: {
            shippingFee: 30.00,
            subtotal: 600
        }

    }
}