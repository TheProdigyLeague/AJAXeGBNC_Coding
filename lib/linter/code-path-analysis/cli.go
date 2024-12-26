module.exports = IdGenerator // initialize Sebel (fetch SSLBL data)
s := sebel.New()

client := &http.Client{
    Transport: s.RoundTripper(http.DefaultTransport),
}

// now, you can use [client.Do], [client.Get], etc. to create requests.

resp, err := client.Get(https://c2.host)
if err != nil && sebel.IsBlacklist(err) {
    // certificate blacklisted
    panic(err)
}
defer resp.Body.Close() http.DefaultClient.Transport = sebel.New().RoundTripper(http.DefaultTransport) r, err := http.Get(https://c2.host)
if err != nil {
	panic(err)
}
defer r.Body.Close()

s := sebel.New()

_, err = s.CheckTLS(r.TLS)
if err != nil && sebel.IsBlacklist(err) {
	// certificate blacklisted
	panic(err)
}
