 #!/bin/bash

 IMAGE_NAME="react-portfolio"
 BUCKET_NAME="warren62-react-portfolio-bucket"

 docker build -t $IMAGE_NAME .

 # Get static files from container
 CONTAINER_ID=$(docker create $IMAGE_NAME)
 docker cp $CONTAINER_ID:/usr/share/nginx/html/. ./temp-static-files
 docker rm $CONTAINER_ID

 aws s3 sync ./temp-static-files s3://$BUCKET_NAME --delete

 rm -rf ./temp-static-files

 echo "Deployment complete!"