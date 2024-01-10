import { NextResponse } from "next/server";
import db from '@/lib/db'
import bcrypt from 'bcrypt'

export async function POST(req : Request) {

  const data = await req.json() 

  const hashPassword = await bcrypt.hash(data.password, 10)

  const nicknameUserFind = await db.usuario.findUnique({
    where: {
      nickName: data.nickName
    }
  })

  if(nicknameUserFind) {
    return NextResponse.json({
      message: 'Nickname already exists'
    },
    {
      status: 400
    })
  }

  const emailUserFind = await db.usuario.findUnique({
    where: {
      email: data.email
    }
  })

  if(emailUserFind) {
    return NextResponse.json({
      message: 'Email already exists'
    },
    {
      status: 400
    }
    
    )
  }

  const newUser = await db.usuario.create({
    data : {
      id: data.id,
      name:  data.name,
      lastName: data.lastName,
      nickName: data.nickName,
      email: data.email,
      address: data.address,
      phone: data.phone,
      password: hashPassword
    }
  })

  return NextResponse.json(newUser)
}