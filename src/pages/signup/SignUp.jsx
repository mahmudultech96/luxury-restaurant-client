import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUser(data.name, data.photoURL)
                    .then(() => {
                        reset();
                        alert('user updated');
                    })
                    .catch(error => console.log(error));
            });
        navigate('/');
    }

    return (
        <div>
            <Helmet>
                <title>Sign Up | Luxury Restaurant</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            {/* name-field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            {/* photo-field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span>This field is required</span>}
                            </div>
                            {/* email-field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email')} placeholder="email" className="input input-bordered" required />
                            </div>
                            {/* password-field */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password', { required: true, minLength: 6 })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span>Password must be 6 characters minimum</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value='Sign Up'></input>
                            </div>
                        </form>
                        <p>Already have an account?<Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;