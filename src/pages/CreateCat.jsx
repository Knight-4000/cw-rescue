import { useState } from "react"
import { toast } from "react-toastify";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";
import Spinner from "../components/Spinner";

export default function CreateCat() {
    const navigate = useNavigate();
    const auth = getAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        characteristics: "",
        description: "",
        kids: "",
        dogs: "",
        images: {}
    });

    const {
        name,
        characteristics,
        description,
        kids,
        dogs,
        images
    } = formData;

    function onChange(e) {
        let boolean = null;
        if (e.target.value === "true") {
          boolean = true;
        }
        if (e.target.value === "false") {
          boolean = false;
        }
        // Files
        if (e.target.files) {
          setFormData((prevState) => ({
            ...prevState,
            images: e.target.files,
          }));
        }
        // Text/Boolean/Number
        if (!e.target.files) {
          setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: boolean ?? e.target.value,
          }));
        }
      }
      async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        if (images.length > 1) {
          setLoading(false);
          toast.error("Only one image per cat");
          return;
        }

        async function storeImage(image) {
          return new Promise((resolve, reject) => {
            const storage = getStorage();
            const filename = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
            const storageRef = ref(storage, filename);
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress =
                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
               console.log("Upload is " + progress + "% done");
               switch (snapshot.state) {
                 case "paused":
                   toast.success("Upload is paused");
                   break;
                 case "running":
                   toast.success("Upload is running");
                   break;
               }
             },
                (error) => {
                  // Handle unsuccessful uploads
                  reject(error);
                },
                () => {
                  // Handle successful uploads on complete
                  getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                  });
                }
              );
            });
          }

        const imgUrls = await Promise.all(
          [...images].map((image) => storeImage(image))
        ).catch((error) => {
          setLoading(false);
          toast.error("Image not uploaded");
          return;
        });

        const formDataCopy = {
          ...formData,
          imgUrls,
          timestamp: serverTimestamp(),
        };
        delete formDataCopy.images;
        !formDataCopy.offer && delete formDataCopy.discountedPrice;
        const docRef = await addDoc(collection(db, "cats"), formDataCopy);
        setLoading(false);
        toast.success("Cat added");
        navigate(`/${docRef.name}/${docRef.id}`);
      }
      if (loading) {
        return <Spinner />;
    }
    return (
      <main className="max-w-md px-2 mx-auto">
        <h1 className="text-2xl text-center mt-8 font-bold">Add your cat</h1>
          <form onSubmit={onSubmit}>
          <p className="text-lg mt-6 font-semibold">Name</p>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Name"
              maxLength="30"
              minLength="3"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

          <p className="text-lg font-semibold">Characteristics</p>
            <textarea
              type="text"
              id="characteristics"
              value={characteristics}
              onChange={onChange}
              placeholder="Characteristics"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

          <p className="text-lg font-semibold">Description</p>
            <textarea
              type="text"
              id="description"
              value={description}
              onChange={onChange}
              placeholder="Description"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

          <p className="text-lg font-semibold">Kids</p>
            <textarea
              type="text"
              id="kids"
              value={kids}
              onChange={onChange}
              placeholder="Kids"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

          <p className="text-lg font-semibold">Dogs</p>
            <textarea
              type="text"
              id="dogs"
              value={dogs}
              onChange={onChange}
              placeholder="Dogs"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />

          <div className="mb-6">
            <p className="text-lg font-semibold">Image</p>
            <input
              type="file"
              id="images"
              onChange={onChange}
              accept=".jpg,.png,.jpeg"
              multiple
              required
              className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
            />
          </div>
          <button type="submit" className="button-link py-3 px-5">Add Cat</button>
        </form>
      </main>
    );
  }
