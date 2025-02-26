import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'Judul Blog Pertama',
    excerpt: 'Ini adalah ringkasan dari blog pertama. Ini hanya contoh teks untuk mengisi konten.',
    image: 'https://via.placeholder.com/300',
    link: '#'
  },
  {
    id: 2,
    title: 'Judul Blog Kedua',
    excerpt: 'Ini adalah ringkasan dari blog kedua. Ini hanya contoh teks untuk mengisi konten.',
    image: 'https://via.placeholder.com/300',
    link: '#'
  },
  {
    id: 3,
    title: 'Judul Blog Ketiga',
    excerpt: 'Ini adalah ringkasan dari blog ketiga. Ini hanya contoh teks untuk mengisi konten.',
    image: 'https://via.placeholder.com/300',
    link: '#'
  }
];

const BlogSection = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Blog Kami
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Temukan artikel menarik dari blog kami.
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography>
                  {post.excerpt}
                </Typography>
              </CardContent>
              <Button 
                variant="contained" 
                color="primary" 
                href={post.link} 
                sx={{ mt: 2, mb: 2, mx: 2 }}
              >
                Baca Selengkapnya
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogSection;