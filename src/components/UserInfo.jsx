import React, { useState } from 'react';
import './UserInfo.css';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar os dados submetidos no estado
    const userData = {
      name,
      age,
      email,
      bio
    };

    setSubmittedData(userData);
  };

  const handleDelete = (e) => {
    e.preventDefault()

    setName('')
    setAge(NaN)
    setEmail('')
    setBio('')

    setSubmittedData(null)
  }

  return (
    <div>
      <div className='containerUser'>
        <div className='userProfile'>
          <img src='https://github.com/caleb-dev12.png' alt='Caleb Freires' id='userImage' />
          <div className='userInfos'>
            {submittedData ? (
              <>
                <h2>Nome do Usuário: {submittedData.name}</h2>
                <p>Idade: {submittedData.age}</p>
                <p>Email: {submittedData.email}</p>
                <p>Biografia: {submittedData.bio}</p>
              </>
            ) : (
              <div>
                <h2>Nome do Usuário: </h2>
                <p>Idade: </p>
                <p>Email: </p>
                <p>Biografia: </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Nome: </label>
          <input
            type='text'
            id='name'
            className='form-control'
            name='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='age'>Idade: </label>
          <input
            type='number'
            id='age'
            className='form-control'
            name='age'
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            id='email'
            className='form-control'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-group'>
          <label htmlFor='bio'>Biografia: </label>
          <textarea
            id='bio'
            className='form-control'
            name='bio'
            required
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>

        <div className="button">
        <button type='submit' className='btn update'>
          Atualizar
        </button>
        <button onClick={handleDelete} type='reset' className='btn delete'>
          Apagar
        </button>
        </div>
      </form>
    </div>
  );
};

export default UserInfo;
