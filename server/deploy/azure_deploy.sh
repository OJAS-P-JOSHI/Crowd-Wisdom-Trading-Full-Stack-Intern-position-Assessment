#!/bin/bash

# Install dependencies
npm install --prefix client
npm install --prefix server

# Build React frontend
npm run build --prefix client

# Deploy backend to Azure
az webapp up --name personal-blog-backend --runtime "NODE|16-lts" --location "centralus"
